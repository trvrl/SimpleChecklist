var todoList = angular.module('app1', []);

todoList.controller('todolist', function($scope) {
    
    $scope.title = "My ToDo List";

    $scope.list = [
        {task: "Make todo list.", selected: false},
        {task: "Learn more AngularJS", selected: false},
        {task: "Learn more Javascript", selected: false}
    ];

    $scope.addTask = function() {
        if ($scope.newTask.length > 0) {
            $scope.list.push({task: $scope.newTask, selected: false});
        }
        $scope.newTask = "";
    };
    
    $scope.clearSelected = function() {
        for (var i = 0; i < $scope.list.length; i++) {
            if ($scope.list[i].selected) {
                $scope.list.splice(i, 1);
                i--;
            }
        }
    };
    
    $scope.moveUp = function(index) {
        if (index != 0) {
            var temp = $scope.list[index - 1];
            $scope.list[index - 1] = $scope.list[index];
            $scope.list[index] = temp;
        }
    };

    $scope.moveDown = function(index) {
        if (index != $scope.list.length - 1) {
            var temp = $scope.list[index + 1];
            $scope.list[index + 1] = $scope.list[index];
            $scope.list[index] = temp;
        }
    };

    $scope.selectAll = function() {
        angular.forEach($scope.list, function(item) {
            item.selected = true;
        })
    }

    $scope.unselectAll = function() {
        angular.forEach($scope.list, function(item) {
            item.selected = false;
        })
    }
});