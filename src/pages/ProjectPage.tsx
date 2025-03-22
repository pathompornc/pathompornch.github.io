
import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail from '@/components/ProjectDetail';
import { projectData } from '@/data/projects';

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    
    // Find project by id
    const foundProject = projectData.find((p) => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
