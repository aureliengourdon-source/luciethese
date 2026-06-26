declare module "react-simple-maps" {
  import * as React from "react"

  export interface ProjectionConfig {
    scale?: number
    center?: [number, number]
    rotate?: [number, number, number]
    parallels?: [number, number]
    precision?: number
  }

  export interface ComposableMapProps
    extends React.SVGAttributes<SVGSVGElement> {
    width?: number
    height?: number
    projection?: string | ((width: number, height: number) => unknown)
    projectionConfig?: ProjectionConfig
    className?: string
  }

  export const ComposableMap: React.ForwardRefExoticComponent<
    ComposableMapProps & React.RefAttributes<SVGSVGElement>
  >

  export interface GeographiesProps {
    geography: string | object
    children: (props: { geographies: Geography[] }) => React.ReactNode
    parseGeographies?: (features: unknown[]) => unknown[]
    className?: string
  }

  export interface Geography {
    rsmKey: string
    id: string | number
    type: string
    geometry: unknown
    properties: { [key: string]: string | number }
  }

  export const Geographies: React.FC<GeographiesProps>

  export interface GeographyProps
    extends React.SVGAttributes<SVGPathElement> {
    geography: Geography
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    className?: string
  }

  export const Geography: React.ForwardRefExoticComponent<
    GeographyProps & React.RefAttributes<SVGPathElement>
  >

  export interface MarkerProps extends React.SVGAttributes<SVGGElement> {
    coordinates: [number, number]
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    className?: string
    children?: React.ReactNode
  }

  export const Marker: React.ForwardRefExoticComponent<
    MarkerProps & React.RefAttributes<SVGGElement>
  >

  export interface LineProps extends React.SVGAttributes<SVGPathElement> {
    from?: [number, number]
    to?: [number, number]
    coordinates?: [number, number][]
    stroke?: string
    strokeWidth?: number
    fill?: string
    className?: string
  }

  export const Line: React.ForwardRefExoticComponent<
    LineProps & React.RefAttributes<SVGPathElement>
  >

  export interface AnnotationProps {
    subject: [number, number]
    dx?: number
    dy?: number
    curve?: number
    connectorProps?: React.SVGAttributes<SVGPathElement>
    className?: string
    children?: React.ReactNode
  }

  export const Annotation: React.FC<AnnotationProps>

  export interface ZoomableGroupProps
    extends React.SVGAttributes<SVGGElement> {
    center?: [number, number]
    zoom?: number
    minZoom?: number
    maxZoom?: number
    className?: string
    children?: React.ReactNode
  }

  export const ZoomableGroup: React.ForwardRefExoticComponent<
    ZoomableGroupProps & React.RefAttributes<SVGGElement>
  >

  export const MapContext: React.Context<{
    width: number
    height: number
    path: (d: unknown) => string
    projection: unknown
  }>

  export const MapProvider: React.FC<{
    width?: number
    height?: number
    projection?: string | ((w: number, h: number) => unknown)
    projectionConfig?: ProjectionConfig
    children?: React.ReactNode
  }>
}
