//データ保持用のサービス
onsModule.factory('ShareDataService', function() {
  var plList = ["player1","pl2","pl3","pl4","pl5"];
  var pointList = [];

  return {
    //プレイヤー一覧を返す
    getPlList: function() {
      return plList;
    },

    //ポイント一覧を返す
    getPtList: function() {
      return pointList;
    },
    
    //点棒一覧とプレイヤー選択から得点リストを作成する
    createPointList: function(resultList,selectPlayerList) {
      var thisGamePointList = {};
      for(var i=0; i < resultList.length; i++) {
        thisGamePointList[selectPlayerList[i]] = resultList[i];//順番にキー：プレイヤー名、値：ポイントを格納
      }
      pointList.push(thisGamePointList);
      console.log(pointList);
    }
  }
})