import 'animate.css/animate.compat.css';
import ProjectCard from '../ProjectCard';
import { Container } from './styles';
import octokit from '../../../api';
import { useState, useEffect } from 'react';

interface OwnerProps {
  avatar_url: string;
}

interface RepoProps {
  id: number;
  html_url: string;
  name: string;
  description: string;
  owner: OwnerProps;
}

const Showcase: React.FC = () => {
  const [data, setData] = useState<Array<RepoProps>>();

  useEffect(() => {
    const request = async () => {
      const response = octokit.request(
        'GET /users/samluiz/repos?sort=created',
        {
          per_page: 3
        }
      );
      const data: Array<RepoProps> = (await response).data;
      setData(data);
    };
    request();
  }, []);

  return (
    <>
      <Container>
        {data &&
          data.map((repo) => {
            return (
              <ProjectCard
                key={repo.id}
                href={repo.html_url}
                src={repo.owner.avatar_url}
                alt={repo.description}
                desc={repo.description}
              />
            );
          })}
      </Container>
    </>
  );
};

export default Showcase;
