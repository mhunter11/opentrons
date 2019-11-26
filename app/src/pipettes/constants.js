// @flow

// action types

// fetch pipettes

export const FETCH_PIPETTES: 'pipettes:FETCH_PIPETTES' =
  'pipettes:FETCH_PIPETTES'

export const FETCH_PIPETTES_SUCCESS: 'pipettes:FETCH_PIPETTES_SUCCESS' =
  'pipettes:FETCH_PIPETTES_SUCCESS'

export const FETCH_PIPETTES_FAILURE: 'pipettes:FETCH_PIPETTES_FAILURE' =
  'pipettes:FETCH_PIPETTES_FAILURE'

// HTTP API paths

export const PIPETTES_PATH: '/pipettes' = '/pipettes'

// pipette compatibility

export const LEFT: 'left' = 'left'
export const RIGHT: 'right' = 'right'
export const PIPETTE_MOUNTS: ['left', 'right'] = [LEFT, RIGHT]
export const MATCH: 'match' = 'match'
export const INCOMPATIBLE: 'incompatible' = 'incompatible'
export const INEXACT_MATCH: 'inexact_match' = 'inexact_match'
