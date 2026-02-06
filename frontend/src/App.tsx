import { useEffect, useState } from 'react';

interface Course {
  id: number;
  code: string;
  name: string;
  professor: string;
  rating: number;
  days: string[];
  time: string;
  credits: number;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/courses')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Baruch Course Scheduler
        </h1>
        
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          <div className="space-y-4">
            {courses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {course.code}: {course.name}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Professor: {course.professor}
                    </p>
                    <p className="text-gray-600">
                      {course.days.join(', ')} • {course.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ {course.rating}
                    </span>
                    <p className="text-gray-600 mt-2">{course.credits} credits</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;