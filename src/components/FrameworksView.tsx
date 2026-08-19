import React, { useState } from 'react';
import { Framework } from '../types';
import { FrameworkNavigator } from './frameworks/FrameworkNavigator';
import { FrameworkExperience } from './frameworks/FrameworkExperience';

interface FrameworksViewProps {
  frameworks: Framework[];
}

export const FrameworksView: React.FC<FrameworksViewProps> = ({ frameworks }) => {
  const [selectedFwId, setSelectedFwId] = useState<string>(frameworks[0]?.id || 'regulacion-emocional');

  const currentFw = frameworks.find(f => f.id === selectedFwId) || frameworks[0];

  return (
    <div className="space-y-6">
      {/* 6 Frameworks Interactive Navigation */}
      <FrameworkNavigator
        frameworks={frameworks}
        selectedFrameworkId={selectedFwId}
        onSelectFramework={setSelectedFwId}
      />

      {/* Main Interactive Framework Experience */}
      {currentFw && (
        <FrameworkExperience
          key={currentFw.id}
          framework={currentFw}
        />
      )}
    </div>
  );
};
