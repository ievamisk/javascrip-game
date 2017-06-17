var app = angular.module('game', []);

app.controller('cards', function($scope) {
    
     $scope.cards_arr = [];
     $scope.cards_arr4 = [
       {id: '1', back_image: 'images/1.png', pair: '9'},
       {id: '2', back_image: 'images/2.png', pair: '10'},
       {id: '3', back_image: 'images/3.png', pair: '11'},
       {id: '4', back_image: 'images/4.png', pair: '12'},
       {id: '5', back_image: 'images/5.png', pair: '13'},
       {id: '6', back_image: 'images/6.png', pair: '14'},
       {id: '7', back_image: 'images/7.png', pair: '15'},
       {id: '8', back_image: 'images/8.png', pair: '16'},

       {id: '9', back_image: 'images/1.png', pair: '1'},
       {id: '10', back_image: 'images/2.png', pair: '2'},
       {id: '11', back_image: 'images/3.png', pair: '3'},
       {id: '12', back_image: 'images/4.png', pair: '4'},
       {id: '13', back_image: 'images/5.png', pair: '5'},
       {id: '14', back_image: 'images/6.png', pair: '6'},
       {id: '15', back_image: 'images/7.png', pair: '7'},
       {id: '16', back_image: 'images/8.png', pair: '8'}      
    ];
    
    $scope.cards_arr6 = [
       {id: '1', back_image: 'images/1.png', pair: '13'},
       {id: '2', back_image: 'images/2.png', pair: '14'},
       {id: '3', back_image: 'images/3.png', pair: '15'},
       {id: '4', back_image: 'images/4.png', pair: '16'},
       {id: '5', back_image: 'images/5.png', pair: '17'},
       {id: '6', back_image: 'images/6.png', pair: '18'},
       {id: '7', back_image: 'images/7.png', pair: '19'},
       {id: '8', back_image: 'images/8.png', pair: '20'},
       {id: '9', back_image: 'images/9.png', pair: '21'},
       {id: '10', back_image: 'images/10.png', pair: '22'},
       {id: '11', back_image: 'images/11.png', pair: '23'},
       {id: '12', back_image: 'images/12.png', pair: '24'},

       {id: '13', back_image: 'images/1.png', pair: '1'},
       {id: '14', back_image: 'images/2.png', pair: '2'},
       {id: '15', back_image: 'images/3.png', pair: '3'},
       {id: '16', back_image: 'images/4.png', pair: '4'},
       {id: '17', back_image: 'images/5.png', pair: '5'},
       {id: '18', back_image: 'images/6.png', pair: '6'},
       {id: '19', back_image: 'images/7.png', pair: '7'},
       {id: '20', back_image: 'images/8.png', pair: '8'},
       {id: '21', back_image: 'images/9.png', pair: '9'},
       {id: '22', back_image: 'images/10.png', pair: '10'},
       {id: '23', back_image: 'images/11.png', pair: '11'},
       {id: '24', back_image: 'images/12.png', pair: '12'}       
    ];
    
       $scope.cards_arr8 = [
       {id: '1', back_image: 'images/1.png', pair: '17'},
       {id: '2', back_image: 'images/2.png', pair: '18'},
       {id: '3', back_image: 'images/3.png', pair: '19'},
       {id: '4', back_image: 'images/4.png', pair: '20'},
       {id: '5', back_image: 'images/5.png', pair: '21'},
       {id: '6', back_image: 'images/6.png', pair: '22'},
       {id: '7', back_image: 'images/7.png', pair: '23'},
       {id: '8', back_image: 'images/8.png', pair: '24'},
       {id: '9', back_image: 'images/9.png', pair: '25'},
       {id: '10', back_image: 'images/10.png', pair: '26'},
       {id: '11', back_image: 'images/11.png', pair: '27'},
       {id: '12', back_image: 'images/12.png', pair: '28'},
       {id: '13', back_image: 'images/13.png', pair: '29'},
       {id: '14', back_image: 'images/14.png', pair: '30'},
       {id: '15', back_image: 'images/15.png', pair: '31'},
       {id: '16', back_image: 'images/16.png', pair: '32'},

       {id: '17', back_image: 'images/1.png', pair: '1'},
       {id: '18', back_image: 'images/2.png', pair: '2'},
       {id: '19', back_image: 'images/3.png', pair: '3'},
       {id: '20', back_image: 'images/4.png', pair: '4'},
       {id: '21', back_image: 'images/5.png', pair: '5'},
       {id: '22', back_image: 'images/6.png', pair: '6'},
       {id: '23', back_image: 'images/7.png', pair: '7'},
       {id: '24', back_image: 'images/8.png', pair: '8'},
       {id: '25', back_image: 'images/9.png', pair: '9'},
       {id: '26', back_image: 'images/10.png', pair: '10'},
       {id: '27', back_image: 'images/11.png', pair: '11'},
       {id: '28', back_image: 'images/12.png', pair: '12'},
       {id: '29', back_image: 'images/13.png', pair: '13'},
       {id: '30', back_image: 'images/14.png', pair: '14'},
       {id: '31', back_image: 'images/15.png', pair: '15'},
       {id: '32', back_image: 'images/16.png', pair: '16'}       
    ];
    
    $scope.cards_arr10 = [
       {id: '1', back_image: 'images/1.png', pair: '21'},
       {id: '2', back_image: 'images/2.png', pair: '22'},
       {id: '3', back_image: 'images/3.png', pair: '23'},
       {id: '4', back_image: 'images/4.png', pair: '24'},
       {id: '5', back_image: 'images/5.png', pair: '25'},
       {id: '6', back_image: 'images/6.png', pair: '26'},
       {id: '7', back_image: 'images/7.png', pair: '27'},
       {id: '8', back_image: 'images/8.png', pair: '28'},
       {id: '9', back_image: 'images/9.png', pair: '29'},
       {id: '10', back_image: 'images/10.png', pair: '30'},
       {id: '11', back_image: 'images/11.png', pair: '31'},
       {id: '12', back_image: 'images/12.png', pair: '32'},
       {id: '13', back_image: 'images/13.png', pair: '33'},
       {id: '14', back_image: 'images/14.png', pair: '34'},
       {id: '15', back_image: 'images/15.png', pair: '35'},
       {id: '16', back_image: 'images/16.png', pair: '36'},
       {id: '17', back_image: 'images/17.png', pair: '37'},
       {id: '18', back_image: 'images/18.png', pair: '38'},
       {id: '19', back_image: 'images/19.png', pair: '39'},
       {id: '20', back_image: 'images/20.png', pair: '40'},

       {id: '21', back_image: 'images/1.png', pair: '1'},
       {id: '22', back_image: 'images/2.png', pair: '2'},
       {id: '23', back_image: 'images/3.png', pair: '3'},
       {id: '24', back_image: 'images/4.png', pair: '4'},
       {id: '25', back_image: 'images/5.png', pair: '5'},
       {id: '26', back_image: 'images/6.png', pair: '6'},
       {id: '27', back_image: 'images/7.png', pair: '7'},
       {id: '28', back_image: 'images/8.png', pair: '8'},
       {id: '29', back_image: 'images/9.png', pair: '9'},
       {id: '30', back_image: 'images/10.png', pair: '10'},
       {id: '31', back_image: 'images/11.png', pair: '11'},
       {id: '32', back_image: 'images/12.png', pair: '12'},
       {id: '33', back_image: 'images/13.png', pair: '13'},
       {id: '34', back_image: 'images/14.png', pair: '14'},
       {id: '35', back_image: 'images/15.png', pair: '15'},
       {id: '36', back_image: 'images/16.png', pair: '16'},
       {id: '37', back_image: 'images/17.png', pair: '17'},
       {id: '38', back_image: 'images/18.png', pair: '18'},
       {id: '39', back_image: 'images/19.png', pair: '19'},
       {id: '40', back_image: 'images/20.png', pair: '20'}
       
    ];
    
    $scope.levels = ['box-4', 'box-6', 'box-8', 'box-10'];
    $scope.clicked = null;
    
    $scope.shuffle = function(array){
			var counter = array.length, temp, index;
	   	while (counter > 0) {
        	index = Math.floor(Math.random() * counter);
        	counter--;
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		}
    $scope.changeLevel = function() {
        $scope.levelIndex++;
        $scope.pairCount = 0;
        
        console.info($scope.levelIndex, ' ', $scope.levels.length);
        
        if ($scope.levelIndex == $scope.levels.length) {
            $('#finish').modal('open');
        }
        else {
            $scope.level = $scope.levels[$scope.levelIndex];
        
            if ($scope.levelIndex == 0) {
                $scope.cards_arr = $scope.shuffle($scope.cards_arr4);
            }
            else if ($scope.levelIndex == 1) {
                $scope.cards_arr = $scope.shuffle($scope.cards_arr6);
            }
            else if ($scope.levelIndex == 2) {
                $scope.cards_arr = $scope.shuffle($scope.cards_arr8);
            }
            else if ($scope.levelIndex == 3) {
                $scope.cards_arr = $scope.shuffle($scope.cards_arr10);
            }
            
            $scope.arraySize = $scope.cards_arr.length/2;
        }
    } 
    
    $scope.newGame = function() {
        $scope.pairCount = 0;
        $scope.arraySize = 0;
        $scope.levelIndex = -1;
        $scope.level = '';
    }
    
    $scope.flip = function(id){
        if(!$('#'+ id).hasClass('flipped') && $scope.clicked != id ){

            $('#' + id).toggleClass('flipped');
            
            setTimeout(function(){
            if ($scope.clicked != null) {
                firstCard = $.grep($scope.cards_arr, function(n, i){
                    return (n.id == $scope.clicked);
                });
                if (firstCard[0].pair == id) {
                    console.log('Correct!');
                    $scope.pairCount++;
                    if ($scope.pairCount == $scope.arraySize) {
                        $('#next-level').modal('open');
                        
                    }
                }
                else {
                    $('#'+id).toggleClass('flipped');
                    $('#'+firstCard[0].id).toggleClass('flipped');
                }
                $scope.clicked = null;
            }
            else {
                $scope.clicked = id;
            }}, 1000);
        }
    }
    $scope.newGame();
});