import { ImageResponse } from "next/og";

export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>
            ✌️
        </text></svg>
    )
}