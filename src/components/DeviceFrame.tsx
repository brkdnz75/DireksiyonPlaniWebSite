interface DeviceFrameProps {
  variant: 'laptop' | 'tablet' | 'phone'
  children: React.ReactNode
}

export default function DeviceFrame({ variant, children }: DeviceFrameProps) {
  if (variant === 'laptop') {
    return (
      <div className="w-full">
        <div className="bg-gray-800 rounded-t-xl pt-3 px-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="bg-white rounded-t-md overflow-hidden aspect-[1920/910]">
            {children}
          </div>
        </div>
        <div className="bg-gray-300 h-3 rounded-b-lg mx-6" />
        <div className="bg-gray-200 h-1 rounded-b-xl mx-10" />
      </div>
    )
  }

  if (variant === 'tablet') {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-gray-800 rounded-2xl p-3">
          <div className="flex justify-center mb-1">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden aspect-[4/3]">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[200px] mx-auto">
      <div className="bg-gray-800 rounded-[2rem] p-1.5">
        <div className="flex justify-center mb-0.5">
          <div className="w-16 h-4 bg-gray-900 rounded-b-xl" />
        </div>
        <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5]">
          {children}
        </div>
      </div>
    </div>
  )
}
