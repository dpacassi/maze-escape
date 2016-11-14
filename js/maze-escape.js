$(document).ready(function($) {

  'use strict';

  var NORTH = 0;
  var EAST = 1;
  var SOUTH = 2;
  var WEST = 3;

  function Turtle() {
    this.facing = EAST;
    this.origFacing = this.facing;
    this.x = 0;
    this.y = 0;

    var found = false;

    for (var i = 0; i < _map.length; i++) {
      for (var k = 0; k < _map[i].length; k++) {
        if (_map[i][k] == 'T') {
          this.x = i;
          this.y = k;
          this.origX = this.x;
          this.origY = this.y;
          _map[i][k] = ' ';

          found = true;
          break;
        }
      }

      if (found) {
        break;
      }
    }
  }

  Turtle.prototype.reset = function() {
    this.x = this.origX;
    this.y = this.origY;
    this.facing = this.origFacing;
  }

  Turtle.prototype.vorneFrei = function() {
    switch (this.facing) {
      case NORTH:
        if (this.x > 0 && (_map[this.x - 1][this.y] == ' ' || _map[this.x - 1][this.y] == 'o')) {
          return true;
        } else {
          return false;
        }
        break;

      case EAST:
        if (this.y < _map[this.x].length && (_map[this.x][this.y + 1] == ' ' || _map[this.x][this.y + 1] == 'o')) {
          return true;
        } else {
          return false;
        }
        break;

      case SOUTH:
        if (this.x < _map[this.x].length && (_map[this.x + 1][this.y] == ' ' || _map[this.x + 1][this.y] == 'o')) {
          return true;
        } else {
          return false;
        }
        break;

      case WEST:
        if (this.y > 0 && (_map[this.x][this.y - 1] == ' ' || _map[this.x][this.y - 1] == 'o')) {
          return true;
        } else {
          return false;
        }
        break;
    }

    return false;
  }

  Turtle.prototype.dreheLinks = function() {
    if (this.facing == NORTH) {
      this.facing = WEST;
    } else {
      this.facing--;
    }

    printMap();
  }

  Turtle.prototype.dreheRechts = function() {
    if (this.facing == WEST) {
      this.facing = NORTH;
    } else {
      this.facing++;
    }

    printMap();
  }

  Turtle.prototype.laufe = function() {
    switch (this.facing) {
      case NORTH:
        if (this.x > 0 && (_map[this.x - 1][this.y] == ' ' || _map[this.x - 1][this.y] == 'o')) {
          this.x--;
        } else {
          console.error('Hindernis :(');
        }
        break;

      case EAST:
        if (this.y < _map[this.x].length && (_map[this.x][this.y + 1] == ' ' || _map[this.x][this.y + 1] == 'o')) {
          this.y++;
        } else {
          console.error('Hindernis :(');
        }
        break;

      case SOUTH:
        if (this.x < _map[this.x].length && (_map[this.x + 1][this.y] == ' ' || _map[this.x + 1][this.y] == 'o')) {
          this.x++;
        } else {
          console.error('Hindernis :(');
        }
        break;

      case WEST:
        if (this.y > 0 && (_map[this.x][this.y - 1] == ' ' || _map[this.x][this.y - 1] == ' ')) {
          this.y--;
        } else {
          console.error('Hindernis :(');
        }
        break;
    }

    printMap();
  }

  Turtle.prototype.istAmAusgang = function() {
    if (_map[this.x][this.y] == 'o') {
      return true;
    }

    return false;
  }

  var _map = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', 'T', ' ', 'x', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  ];

  var _map2 = [
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'o', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', ' ', 'x', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', 'x', 'x', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', 'T', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'x'],
    ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
  ];

  var turtle = new Turtle();

  function printMap() {
    var html = '';

    html += '<table><tbody>';
    for (var i = 0; i < _map.length; i++) {
      html += '<tr>';

      for (var k = 0; k < _map[i].length; k++) {
        if (i == turtle.x && k == turtle.y) {
          var appendix = '';

          switch (turtle.facing) {
            case NORTH:
              appendix = ' turtle--north';
              break;

            case EAST:
              appendix = ' turtle--east';
              break;

            case SOUTH:
              appendix = ' turtle--south';
              break;

            case WEST:
              appendix = ' turtle--west';
              break;
          }

          html += '<td class="turtle' + appendix + '"></td>';
        } else {
          switch (_map[i][k]) {
            case 'x':
              html += '<td class="wall"></td>';
              break;

            case 'o':
              html += '<td class="exit"></td>';
              break;

            default:
              html += '<td></td>';
              break;
          }
        }
      }

      html += '</tr>';
    }
    html += '</tbody></table>';

    $('#map-wrap').html(html);
  }

  printMap();

  $('#run').click(function() {
    console.clear();
    var source = $('#source').val();
    eval(source);
  });

  $('#reset').click(function() {
    console.clear();
    turtle.reset();
    printMap();
  });


  window.turtle = turtle;
  window.printMap = printMap;
});
