import * as brand from '@planningcenter/icons/paths/brand'
import * as general from '@planningcenter/icons/paths/general'
import { string } from 'prop-types'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const ICON_PATHS = {
  brand,
  general,
}

/**
 * ICON
 *
 * Uses @planningcenter/icons collection
 *
 * Basic Usage:
 * <Icon symbol="general#star" />
 *
 * If you'd like some type safety or just don't want to be bothered to look up the
 * icons, you can use ICON_PATHS and supply the path directly.
 *
 * import { Icon, ICON_PATHS } from "pathto/icon"
 * <Icon path={ICON_PATHS.general.star} />
 *
 */

const Icon = ({ symbol = '', path, fill = '#000', ...props }) => {
  const [collection, name] = symbol.split('#')
  const d = ICON_PATHS?.[collection]?.[name] || path
  if (!d) return null

  return (
    <Svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      fill="transparent"
      {...props}>
      <Path fill={fill} d={d} />
    </Svg>
  )
}

Icon.propTypes = {
  symbol: string,
  path: string,
}

export { Icon, ICON_PATHS }
