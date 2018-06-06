class Robot {
	constructor (){
    this.coordinates = [0,0]
    this.bearing = 'north'
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(direction) {
    debugger
    if (direction === 'north' || direction === 'south' || direction === 'west' || direction === 'east') {
      this.bearing = direction
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(hash) {
    this.setBearing(hash.direction)
    this.setCoordinates(hash.x, hash.y)
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    }
    else if (this.bearing === 'east') {
      this.setBearing('south')
    }
    else if (this.bearing === 'south') {
      this.setBearing('west')
    }
    else if (this.bearing === 'west') {
      this.setBearing('north')
    }

  }
  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west')
    }
    else if (this.bearing === 'east') {
      this.setBearing('north')
    }
    else if (this.bearing === 'south') {
      this.setBearing('east')
    }
    else if (this.bearing === 'west') {
      this.setBearing('south')
    }
  }
  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    }
    else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    }
    else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    }
    else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(input) {
    for(let x of input) {
      if (x === 'R'){
        this.turnRight()
      }
      else if (x === 'L') {
        this.turnLeft()
      }
      else if (x === 'A'){
        this.advance()
      }
    }

  }
}
