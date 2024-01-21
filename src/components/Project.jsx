import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Project({ projects }) {
  return (
    <div className="project-container">
      {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
      {projects.map((project) => (
      <Card sx={{ 
          margin: 2,
          maxHeight: 500, 
          alignItems: 'stretch', 
          width: 350, 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'start', 
          flexDirection: 'column',
          }} className="cardbg">
        <CardMedia
          sx={{ height: 200 }}
          image={project.thumbnail}
          title={project.alttext}
        />
        <CardContent sx={{ justifyContent: 'start', alignItems: 'stretch' }} className="cardbg">
          <Typography gutterBottom variant="h4" component="div" color='InfoText'>
            {`${project.name}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${project.description}`}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifySelf: 'center' }} className="cardbg">
          <Button size="small">
            <a href={project.githublink}>
              <img className="logo" src="https://cdn.icon-icons.com/icons2/2550/PNG/512/link_icon_152591.png"></img>
            </a>
          </Button>
          <Button size="small">
              <a href={project.githublink}>
                <img className="logo" src="https://www.svgrepo.com/show/361181/github.svg"></img>
              </a>
          </Button>
        </CardActions>
      </Card>
      ))}
    </div>
    
  );
}

export default Project;
