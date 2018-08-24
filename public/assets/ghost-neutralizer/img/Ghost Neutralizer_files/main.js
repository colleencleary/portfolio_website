// for first pass
let flag = true
const rooms = ['foyer', 'library', 'sittingRoom', 'bedroom', 'greenhouse']
var level = 0
var $ghost = $('<img>').attr('src', 'img/ghosts/ghost1.png').addClass('ghost')

// main character stats
const investigator = {
  health: 50,
  damage: 5,
  neutralize: () => {
    ghost.health -= investigator.damage;
    // change width of opponent health bar to reflect current health
    $('#ghost-health').css('width', ghost.health / 20 * 100 + '%')
    $('#ghost-health').empty().append($('<p>').text(Math.round(ghost.health / 20 * 100) + '%'))
  }
}

const ghost = {
  health: 20,
  damage: 1,
  xy_position: (room) => {
    // randomize x and y coordinates and height
    const y_coordinate = Math.round(Math.random() * $(room).height() - 150)
    const x_coordinate = Math.round(Math.random() * $(room).width() - 200)
    const height = Math.round(Math.random() * 300 + 50) + 'px'

    // $(room).css('border', '1px solid gold')
    return [y_coordinate, x_coordinate, height]
  },
  createGhost: (room) => {
    // set up ghost img for point and click fighting
    $ghost.off('click').on('click', investigator.neutralize)
    $(room).append($ghost.fadeIn(3000))
    $ghost.addClass('animation')
    // make health bars visible
    $(room).prepend($('.contain-healthbars').css('display', 'inline-flex'))
    $('#ghost-health').empty().append($('<p>').text(Math.round(ghost.health / 20 * 100) + '%'))
    $('#investigator-health').empty().append($('<p>').text(Math.round(investigator.health / 50 * 100) + '%'))
    // make weapon visible to player
    $(room).prepend($('#protonPack').show())
    // if first pass, call firstAttack function to introduce weapon to player
    if (flag == true) {
      ghost.firstAttack(room)
    } else {
      ghost.attack(room);
    }
  },
  attack: (room) => {
    //
    $ghost.fadeIn(2000).addClass('animation')
    var location = ghost.xy_position(room)
    var speed = Math.random() * 3000 + 500

    $ghost.animate({
      top: location[0],
      left: location[1],
      height: location[2]
    }, speed, () => {
      if (ghost.health <= 0) {
        nextLevelScreen()
        $ghost.removeClass('animation').hide()
        $('#protonPack').hide()
        $('.health-container').eq(1).hide()
        ghost.damage++;
        ghost.health = 20;
        level++
        return;
      } else if (ghost.health <= 0) {
        loseScreen()
        return;
      }

      $ghost.removeClass('animation').hide()

      ghost.attack(room);

    });

    investigator.health -= ghost.damage;
    // change width of opponent health bar to reflect current health
    $('#investigator-health').empty().append($('<p>').text(Math.round(investigator.health / 50 * 100) + '%'))
    $('#investigator-health').css('width', investigator.health / 50 * 100 + '%')
  },
  firstAttack: (room) => {
    // intro to ghost and weapon
    const $p = $('<p>').text('WHOAAAAAA!!! A GHOST!')
    $p.append($('<p>').text('Good thing you came prepared! Use your cursor to direct the proton pack at the ghost.'))
    $('#nextButton').text('close').off("click")
    $('#nextButton').on('click', () => {
      $('#dialogue').hide()
      ghost.attack(room)
      flag = false;
      $('#nextButton').off("click")
    })
    $p.append($('#nextButton'))
    $('#dialogue').empty().append($p).show()

    // reset ghost health and increment damage for next level
    ghost.damage++;
    ghost.health = 20;
  }
}

const nextLevelScreen = () => {
  const $p = $('<p>').text('You got rid of the ghost! ...for now anyway.\nKeep checking out the place to see if you can get rid of it.')

  $('#nextButton').text('next room').off("click").on('click', () => {
    $('#dialogue').hide()
    explorenextroom()
  })
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p).show()
}
const loseScreen = () => {
  const $p = $('<p>').text('Oh no! The ghost got you!\nTake a break to get your nerves back before continuing the investigation')

  $('#nextButton').text('restart').off("click").on('click', () => {
    $('#dialogue').hide()
    startGame()
  })
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p).show()
}

const explorenextroom = () => {
  $('.' + rooms[level - 1]).fadeOut(3000)
  const $p = $('<p>').text('You made it to the ' + rooms[level] + '!')

  if (rooms[level] == 'library') {
    $p.append($('<p>').text('I bet you could learn something in here.'))
  }

  $('#nextButton').text('continue')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', () => {
    $('#dialogue').fadeOut(2000)
    createlibrary();
  })
  $('.' + rooms[level]).append($('#dialogue')).fadeIn(3000)
}

const enterHouse = () => {
  $('.main').fadeOut(3000)
  const $p = $('<p>').text('Take a look around and see if you can find any evidence to back up Mr. Smith\'s claims.')

  $('#nextButton').text('begin your investigation')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', exploreFoyer)
  $('.foyer').fadeIn(3000).append($('#dialogue'))
  $('#dialogue').show()
}

const continueIntro = () => {

  const $p = $('<p>').text('As Mr. Smith continued the work on his own, he started to notice some weird things happening in the mansion.')
  $p.append($('<p>').text('It started with cold spots, then he began hearing whispers, and soon enough he was dodging objects thrown in his direction while alone in the mansion. Mr. Smith has hired you to figure out what\'s been going on in his mansion.'))
  $p.append($('<p>').text('Explore the mansion and see if you can track down the source of Mr. Smith\'s haunting!'))

  $('#nextButton').text('take the case')
  $p.append($('#nextButton'))
  $('#dialogue').empty().append($p)
  $('#nextButton').off('click').on('click', enterHouse)
}

const startGame = () => {
  $('#start').hide()
  $('h1').attr('id', 'mini-header')
  // ('#changeRoom').show()
  $('.main').show()
  $('#nextButton').off('click').on('click', continueIntro)
}

$(() => {
  $('#startButton').on('click', startGame)



})
