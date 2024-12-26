//불러오기
import {world, system, Direction, PlayerButtonInputAfterEvent,} from '@minecraft/server'

system.runInterval(() => {
  world.getAllPlayers().forEach(player => {
    if (player.isOnGround)
      leap.set(player.name, true)

    if (player.isFalling && player.isJumping && leap.get(player.name)) {
      let view = player.getViewDirection()

      player.applyKnockback(view.x, view.z, 1.5, 0.5) //운동량 설정
      player.runCommand('') //실행할 커맨드 설정

      leap.set(player.name, false)
    }
  })
})

