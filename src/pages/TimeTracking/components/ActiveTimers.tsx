import React, { useState, useEffect } from 'react';
import { Play, Pause, Square, Clock } from 'lucide-react';

interface Timer {
  id: string;
  project: string;
  task: string;
  startTime: Date;
  isRunning: boolean;
  totalTime: number; // in seconds
}

const ActiveTimers: React.FC = () => {
  const [timers, setTimers] = useState<Timer[]>([
    {
      id: '1',
      project: 'Website Redesign',
      task: 'UI Development',
      startTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isRunning: true,
      totalTime: 7200, // 2 hours in seconds
    },
    {
      id: '2',
      project: 'Mobile App',
      task: 'Code Review',
      startTime: new Date(),
      isRunning: false,
      totalTime: 1800, // 30 minutes
    },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentTime = (timer: Timer) => {
    if (timer.isRunning) {
      const elapsed = Math.floor((currentTime.getTime() - timer.startTime.getTime()) / 1000);
      return timer.totalTime + elapsed;
    }
    return timer.totalTime;
  };

  const toggleTimer = (id: string) => {
    setTimers(prev => prev.map(timer => 
      timer.id === id 
        ? { ...timer, isRunning: !timer.isRunning, startTime: new Date() }
        : timer
    ));
  };

  const stopTimer = (id: string) => {
    setTimers(prev => prev.map(timer => 
      timer.id === id 
        ? { ...timer, isRunning: false }
        : timer
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Active Timers</h2>
          <p className="text-sm text-gray-500 mt-1 hidden sm:block">Track your current work</p>
        </div>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {timers.map((timer) => {
          const currentElapsed = getCurrentTime(timer);
          
          return (
            <div
              key={timer.id}
              className={`p-4 rounded-lg border-2 transition-all duration-200 touch-manipulation ${
                timer.isRunning 
                  ? 'border-primary-200 bg-primary-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">{timer.project}</h3>
                  <p className="text-sm text-gray-500 truncate">{timer.task}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium self-start ${
                  timer.isRunning 
                    ? 'bg-success-100 text-success-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {timer.isRunning ? 'Running' : 'Paused'}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl sm:text-2xl font-mono font-bold text-gray-900">
                  {formatTime(currentElapsed)}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleTimer(timer.id)}
                    className={`p-3 rounded-lg transition-colors duration-200 touch-manipulation ${
                      timer.isRunning
                        ? 'bg-warning-100 text-warning-600 hover:bg-warning-200 active:bg-warning-300'
                        : 'bg-success-100 text-success-600 hover:bg-success-200 active:bg-success-300'
                    }`}
                  >
                    {timer.isRunning ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={() => stopTimer(timer.id)}
                    className="p-3 rounded-lg bg-error-100 text-error-600 hover:bg-error-200 active:bg-error-300 transition-colors duration-200 touch-manipulation"
                  >
                    <Square className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 px-4 py-3 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 active:bg-primary-200 transition-colors duration-200 touch-manipulation">
        + Add New Timer
      </button>
    </div>
  );
};

export default ActiveTimers;