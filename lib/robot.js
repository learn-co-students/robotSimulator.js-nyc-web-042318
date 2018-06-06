class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";

  }
  setCoordinates(x, y) {
    this.coordinates = [x,y]
  }

  setBearing(bearing) {
    if (bearing === "north" || bearing == "south" || bearing == "east" || bearing == "west") {
      this.bearing = bearing
    }else {
      throw "/Invalid Robot Bearing/i"
    }
  }

  place(obj) {
    this.setCoordinates(obj['x'], obj['y'])
    this.setBearing(obj['direction'])
  }

  turnRight() {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('north')
    }
  }

  turnLeft() {
    if (this.bearing === 'north') {
      this.setBearing('west')
    } else if (this.bearing === 'east') {
      this.setBearing('north')
    } else if (this.bearing === 'south') {
      this.setBearing('east')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1]+1)
    } else if (this.bearing === 'east') {
      this.setCoordinates(this.coordinates[0]+1, this.coordinates[1])
    } else if (this.bearing === 'south') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1]-1)
    } else if (this.bearing === 'west') {
      this.setCoordinates(this.coordinates[0]-1, this.coordinates[1])
    }
  }

  translateInstructions(ins) {
    if (ins.includes('L') && ins.length === 1) {
      this.turnLeft()
    } else if (ins.includes('R') && ins.length === 1) {
      this.turnRight()
    } else if (ins.includes('A') && ins.length === 1) {
      this.advance()
    } else {
      for (const letter of ins) {
        this.translateInstructions(letter)
      }
    }
  }
}
