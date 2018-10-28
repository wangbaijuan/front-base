var issue = {
    key: null,
    that: null,
    listId: null,
    init: function(obj) {
        that = this;
        that.key = obj.key;
        that.listId = obj.listId;

        that.fetchIssues();
        // add event
        document.getElementById('issueInputForm').addEventListener('submit', that.saveIssue);
        // close event
        document.getElementById('issuesList').addEventListener('click', function(e){
            e.stopPropagation();
            // console.log(e.target.href); 可以访问
            // console.log(e.target.data-id); 访问不到
            var id = e.target.dataset.id
            //   console.log(e.target.getAttribute('data-id')); ok
            var eText = e.target.innerText;
            if(eText === 'Close'){
                that.setStatusClosed(id);
            }
            else if(eText === 'Delete'){
                console.log(e);
                $("#myModal").modal();
                $('#myModal').on("shown.bs.modal", function(){
                   document.getElementById("issue-id").innerHTML = id;
                })
            }
        });
        //delete event
        document.getElementById('delete').addEventListener('click', function(){
            var id = document.getElementById('issue-id').innerText;
            that.deleteIssue(id);
            $("#myModal").modal('hide');
        });
    },
    fetchIssues: function() {
        console.log("fetch")

        // 1. 调用后台接口，返回issue列表
        var issues = JSON.parse(localStorage.getItem(that.key));
        if(!issues) {
            // 有意义的提示给用户 early return 
            return ;
        }

        // 2. 根据返回的数据，渲染 列表
        var issuesList = document.getElementById(that.listId);
        issuesList.innerHTML = '';
        
        for (var i = 0; i < issues.length; i++) {
            var obj = {
                id : issues[i].id,
                desc : issues[i].description,  
                severity : issues[i].severity,
                assignedTo : issues[i].assignedTo,
                status : issues[i].status
            };
            
            issuesList.innerHTML +=  that.listTemplate(obj);
        }
    },
    listTemplate: function (obj) {
        var labelStatus = obj.status === 'Open' ? 'info':'danger';
        
        return  ('<div class="well">'+
            '<h6>Issue ID: ' + obj.id + '</h6>'+
            '<p><span class="label label-'+labelStatus+'">' + obj.status + '</span></p>'+
            '<h3>' + obj.desc + '</h3>'+
            '<p><span class="glyphicon glyphicon-time"></span> ' + obj.severity + ' '+
            '<span class="glyphicon glyphicon-user"></span> ' + obj.assignedTo + '</p>'+
            '<a href="#" class="btn btn-warning" data-id='+obj.id+'>Close</a> '+
            '<a href="#"  class="btn btn-danger" data-id='+obj.id+'>Delete</a>'+
        '</div>');
    },
    saveIssue: function(e) {
        e.preventDefault(); 
        //1. 获取数据，对数据进行校验，封装json对象（后台需要的数据格式）
        var issueId = chance.guid();
        var issueDesc = document.getElementById('issueDescInput').value;
        var issueSeverity = document.getElementById('issueSeverityInput').value;
        var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
        var issueStatus = 'Open';
        // js 对象
        var issue = {
          id: issueId,
          description: issueDesc,
          severity: issueSeverity,
          assignedTo: issueAssignedTo,
          status: issueStatus
        }
        
        //2. 访问后台接口，异步的。注意判断：后台接口的返回（包括http状态码，和响应数据的状态）
        /*
         {
             "code":0,
             "message":"....",
             "result":{
                 // 真正后台响应的数据
             }
         }
        */
        // POST /url app/type json
        if (localStorage.getItem(that.key) === null) {
          var issues = [];
          issues.push(issue);
          localStorage.setItem(that.key, JSON.stringify(issues));
        } else {
          var issues = JSON.parse(localStorage.getItem(that.key));
          issues.push(issue);
          localStorage.setItem(that.key, JSON.stringify(issues));
        }
        //
        // 3. 清空表单数据
        document.getElementById('issueInputForm').reset();

        // 4. 重新获取数据列表
        console.log(this)
        console.log(that);
        that.fetchIssues();
    },
    setStatusClosed: function(id) {
        // 1. 调用后台更新接口
        var issues = JSON.parse(localStorage.getItem('issues'));

        // get issue from issues by id
        for(var i = 0; i < issues.length; i++) {
          if (issues[i].id == id) {
            issues[i].status = "Closed";
          }
        }
        localStorage.setItem('issues', JSON.stringify(issues));
        
        //2. 重新获取数据
        that.fetchIssues();
    },
    deleteIssue: function (id) {
        // 1 调用后台删除接口
        var issues = JSON.parse(localStorage.getItem('issues'));
        for(var i = 0; i < issues.length; i++) {
          if (issues[i].id == id) {
            issues.splice(i, 1);
          }
        }
        localStorage.setItem('issues', JSON.stringify(issues));
    
        //2.重新获取数据，刷新列表
        that.fetchIssues();
    }

}


issue.init({
    key:"issues",
    listId:"issuesList"
});
