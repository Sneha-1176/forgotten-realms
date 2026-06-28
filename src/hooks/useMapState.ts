import { useState, useCallback, useEffect, useRef } from 'react';
import { regionsData, type Region } from '../data/regions';

export function useMapState() {
  const [clearedRegions, setClearedRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [allCleared, setAllCleared] = useState(false);
  const [popRegion, setPopRegion] = useState<string | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const popTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const celebrationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalRegions = regionsData.length;

  const handleRegionClick = useCallback(
    (regionId: string) => {
      if (!clearedRegions.includes(regionId)) {
        const updated = [...clearedRegions, regionId];
        setClearedRegions(updated);
        setPopRegion(regionId);

        const region = regionsData.find((r) => r.id === regionId);
        if (region) {
          // Slight delay so pop animation plays first
          setTimeout(() => setSelectedRegion(region), 250);
        }

        // Clear pop animation
        if (popTimeout.current) clearTimeout(popTimeout.current);
        popTimeout.current = setTimeout(() => setPopRegion(null), 1200);

        // Check if all cleared
        if (updated.length === totalRegions) {
          setTimeout(() => {
            setAllCleared(true);
            setShowCelebration(true);
            if (celebrationTimeout.current) clearTimeout(celebrationTimeout.current);
            celebrationTimeout.current = setTimeout(() => setShowCelebration(false), 3500);
          }, 600);
        }
      }
    },
    [clearedRegions, totalRegions],
  );

  const closeModal = useCallback(() => {
    setSelectedRegion(null);
  }, []);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (popTimeout.current) clearTimeout(popTimeout.current);
      if (celebrationTimeout.current) clearTimeout(celebrationTimeout.current);
    };
  }, []);

  return {
    clearedRegions,
    selectedRegion,
    allCleared,
    popRegion,
    showCelebration,
    handleRegionClick,
    closeModal,
  };
}
