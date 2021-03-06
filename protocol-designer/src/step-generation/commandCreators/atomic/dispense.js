// @flow
import * as errorCreators from '../../errorCreators'
import { modulePipetteCollision } from '../../utils'
import type { DispenseParams } from '@opentrons/shared-data/protocol/flowTypes/schemaV3'
import type { CommandCreator, CommandCreatorError } from '../../types'

/** Dispense with given args. Requires tip. */
const dispense: CommandCreator<DispenseParams> = (
  args,
  invariantContext,
  prevRobotState
) => {
  const { pipette, volume, labware, well, offsetFromBottomMm, flowRate } = args

  const actionName = 'dispense'
  let errors: Array<CommandCreatorError> = []

  if (
    modulePipetteCollision({
      pipette,
      labware,
      invariantContext,
      prevRobotState,
    })
  ) {
    errors.push(errorCreators.modulePipetteCollisionDanger())
  }

  if (!prevRobotState.tipState.pipettes[pipette]) {
    errors.push(
      errorCreators.noTipOnPipette({ actionName, pipette, labware, well })
    )
  }

  if (!labware || !prevRobotState.labware[labware]) {
    errors.push(errorCreators.labwareDoesNotExist({ actionName, labware }))
  }

  if (errors.length > 0) {
    return { errors }
  }

  const commands = [
    {
      command: 'dispense',
      params: {
        pipette,
        volume,
        labware,
        well,
        offsetFromBottomMm,
        flowRate,
      },
    },
  ]

  return {
    commands,
  }
}

export default dispense
