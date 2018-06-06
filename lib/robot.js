class Robot {
  constructor(){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(dir){
    if (dir === 'north' || dir === 'south' ||dir === 'west' ||dir === 'east' ) {
      this.bearing = dir
    } else {
      throw('Invalid Robot Bearing')
    }
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
        this.setBearing('west')
    } else if (this.bearing === 'west'){
        this.setBearing('north')
    }
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
        this.setBearing('east')
    } else if (this.bearing === 'east'){
        this.setBearing('north')
    }
  }

  advance(){
    if (this.bearing === 'north'){
      this.coordinates[1] += 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south') {
        this.coordinates[1] -= 1
    } else if (this.bearing === 'west'){
        this.coordinates[0] -= 1
    }
  }

  translateInstructions(string){
    for (var el of string) {
      if (el ==='R') {
        this.turnRight()
      } else if ( el === 'L') {
        this.turnLeft()
      } else if ( el === 'A') {
        this.advance()
      }
    }
  }

}
