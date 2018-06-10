const directions = ["north", "east", "south", "west"]
class Robot {

	constructor(coordinates, bearing) {
		this.coordinates = (coordinates) ? coordinates : [0, 0]
		this.bearing = (bearing) ? bearing : "north"
	}
	

	setCoordinates(x, y) {
		this.coordinates = [x, y]
	}

	setBearing(bearing) {
		directions.includes(bearing) ? this.bearing = bearing : (function(){throw "Invalid Robot Bearing"})()
	}

	place( position ) {
		this.setCoordinates (position.x, position.y)
		this.setBearing ( position.direction )
	}

	turnRight() {
		(this.bearing === "west") ? this.bearing = directions[0] : this.bearing = directions[directions.indexOf(this.bearing) + 1]
	}

	turnLeft() {
		(this.bearing === "north") ? this.bearing = directions[3] : this.bearing = directions[directions.indexOf(this.bearing) -1]
	}

	advance() {
		switch(this.bearing) {
			case "north":
				this.coordinates[1]++
				break
			case "south":
				this.coordinates[1]--
				break
			case "west":
				this.coordinates[0]--
				break
			case "east":
			 this.coordinates[0]++
			 break
		}
	}

		translateInstructions(str) {
			for (let letter of str) {
				switch (letter) {
					case "L":
						this.turnLeft()
						break
					case "R":
						this.turnRight()
						break
					case "A":
						this.advance()
						break
				}
			}
		}
}