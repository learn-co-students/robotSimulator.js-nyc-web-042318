class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x,y) {
    this.coordinates = [x,y]
  }

  setBearing(direction) {
    if (direction === 'north' || direction === 'south' || direction === 'west' || direction === 'east') {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(object) {
    this.setCoordinates(object.x, object.y)
    this.setBearing(object.direction)
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else {
      this.setBearing('north')
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('east')
    } else {
      this.setBearing('north')
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else {
      this.coordinates[0] -= 1
    }
  }

  translateInstructions(input) {
    for(let x of input) {
      if (x === 'L') {
        this.turnLeft()
      } else if (x === 'R') {
        this.turnRight()
      } else if (x === 'A') {
        this.advance()
      }
    }
  }

}
