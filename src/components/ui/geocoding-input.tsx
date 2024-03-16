'use client'

import { Button } from '@/components/ui/button'
import { Input, InputProps } from '@/components/ui/input'
import { useMergeRefs } from '@/hooks/use-merge-refs'
import { cn } from '@/lib/utils/class-name'
import {
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  useMapsLibrary,
} from '@vis.gl/react-google-maps'
import { Search } from 'lucide-react'
import { forwardRef, useMemo, useRef, useState } from 'react'

export const GeocodingInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const internalRef = useRef<HTMLInputElement>(null)
    const refs = useMergeRefs(internalRef, ref)
    const [isLoading, setIsLoading] = useState(false)
    const [placeId, setPlaceId] = useState<string | undefined>()
    const geocoding = useMapsLibrary('geocoding')
    const geocoder = useMemo(() => geocoding && new geocoding.Geocoder(), [geocoding])
    const [cameraProps, setCameraProps] = useState<Partial<MapCameraChangedEvent['detail']>>({
      zoom: 15,
    })
    const [markerPosition, setMarkerPosition] = useState<google.maps.LatLngLiteral>()

    const updateLocation = (result: google.maps.GeocoderResult) => {
      const center = {
        lat: result.geometry.location?.lat(),
        lng: result.geometry.location?.lng(),
      }
      setPlaceId(result.place_id)
      setCameraProps((prevProps) => ({
        ...prevProps,
        center,
      }))
      setMarkerPosition(center)
      if (internalRef.current) {
        internalRef.current.value = result.formatted_address
      }
    }

    const geocodeAddress = (address?: string) => {
      setIsLoading(true)
      try {
        geocoder?.geocode({ address }, (results, status) => {
          if (status === 'OK' && results) {
            updateLocation(results[0])
          }
          setIsLoading(false)
        })
      } catch (error) {
        console.error('Geocoding failed:', error)
        setIsLoading(false)
      }
    }

    const handleMapOnCameraChanged = (event: MapCameraChangedEvent) => {
      setCameraProps(event.detail)
    }

    const handleOnMarkerDragEnd = (event: google.maps.MapMouseEvent) => {
      setIsLoading(true)
      try {
        geocoder?.geocode({ location: event.latLng }, (results, status) => {
          if (status === 'OK' && results) {
            updateLocation(results[0])
          }
          setIsLoading(false)
        })
      } catch (error) {
        console.error('DragEnd Geocoding failed:', error)
        setIsLoading(false)
      }
    }

    return (
      <div className="space-y-2">
        <div className="flex gap-2.5">
          <Input ref={refs} className={cn('flex-1', className)} {...props} />
          <Button
            className="shrink-0"
            size="icon"
            onClick={() => geocodeAddress(internalRef.current?.value)}
            isLoading={isLoading}
            icon={<Search className="h-4 w-4" />}>
            <span className="sr-only">Search location</span>
          </Button>
        </div>
        {cameraProps.center && (
          <div className="h-[200px] w-full overflow-hidden rounded-md">
            <input name="lat" type="hidden" value={cameraProps.center.lat} />
            <input name="lng" type="hidden" value={cameraProps.center.lng} />
            <input name="placeId" type="hidden" value={placeId} />
            <Map
              mapId="60958c7dbf7aeb70"
              {...cameraProps}
              gestureHandling="greedy"
              disableDefaultUI
              onCameraChanged={handleMapOnCameraChanged}>
              <AdvancedMarker
                draggable
                position={markerPosition}
                onDragEnd={handleOnMarkerDragEnd}
              />
            </Map>
          </div>
        )}
      </div>
    )
  }
)
GeocodingInput.displayName = 'GeocodingInput'
