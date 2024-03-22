import React from 'react'
import Tile from './tile'
import { ChevronRight } from 'lucide-react'
import { useDataContextProvider } from '@/context/data-context-provider'

type RowProps = {
  rowId: number
}

export default function Row({ rowId }: RowProps) {
  const tiles = [1, 2, 3, 4, 5]

  const { currentRow } = useDataContextProvider()

  return (
    <div className='flex relative'>
      {currentRow === rowId && (
        <div className='absolute top-1/2 transform -translate-y-2/3 -left-8'>
          <ChevronRight />
        </div>
      )}
      <div className='flex flex-row gap-2'>
        {tiles.map((tile, index) => (
          <Tile key={tile} rowId={rowId} tileId={index} />
        ))}
      </div>
    </div>
  )
}
