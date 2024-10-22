"use client"
import { useRive } from '@rive-app/react-canvas';

export default function RiveCar() {
  const { RiveComponent } = useRive({
    src: 'https://cdn.rive.app/animations/vehicles.riv',
    stateMachines: "bumpy",
    autoplay: true,
    isTouchScrollEnabled: true,
  });

  return (
    <RiveComponent
    />
  );
}