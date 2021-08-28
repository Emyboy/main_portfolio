import React, { ReactElement } from 'react'
import Heading from '../components/Heading'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { Section } from '../components/Styled/Section.styled';
import ProjectData from '../components/ProjectCard/ProjectData.mock'

export default function Projects(): ReactElement {
    return (
        <div>
            <Section>
                <Heading heading="My Side Project" />
            </Section>
            <Section gray>
                <div className="row">
                    {
                        ProjectData.map((val, i)=> {
                            return (
                              <div className="col-6" key={i}>
                                <ProjectCard {...val} />
                              </div>
                            );
                        })
                    }
                </div>
            </Section>
        </div>
    )
}
