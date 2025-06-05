import { Component, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-accomplishments',
  imports: [NgFor, NgIf],
  templateUrl: './accomplishments.component.html',
  styleUrl: './accomplishments.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccomplishmentsComponent {

  filtertype: string = '';
  accomplishments = [
    {
      title: 'HackerRank Angular Certification',
      description: 'I passed the HackerRank Angular Certification, demonstrating my proficiency in Angular development.',
      imageUrl: 'assets/hackerrank_logo.jpg',
      link: 'https://www.hackerrank.com/certificates/059fa57d17aa',
      type: 'certification'
    },
    {
      title: 'HackerRank Java Certification',
      description: 'I passed the HackerRank Java Certification, which included the four principle of oop language.',
      imageUrl: 'assets/hackerrank_logo.jpg',
      link: 'https://www.hackerrank.com/certificates/d677153a81de',
      type: 'certification'
},
{
  title: 'HackerRank SQL Certification',
  description: 'I passed the HackerRank SQL Certification, which included It includes simple queries, relationships, and aggregators.',
  imageUrl: 'assets/hackerrank_logo.jpg',
  link: 'https://www.hackerrank.com/certificates/9f5be4be330a',
  type: 'certification'
},
{
  title: 'AWS Certified Cloud Practitioner',
  description: 'I passed the AWS Certified Cloud Practitioner exam, demonstrating my understanding of AWS cloud concepts and services.',
  imageUrl: 'assets/aws_logo.png',
  link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/E0P6RK2JP2E1QKK8',
  type: 'certification'
},
{
  title: 'Nucamp Coding Bootcamp',
  description: 'Completed a coding bootcamp at Nucamp, gaining hands-on experience in Full Stack Web Development with React and Nodejs.',
  imageUrl: 'assets/nucamp_logo.jpg',
  type: 'certification'
},

{
  title: 'Fidelity Investments Rewards+ Program',
  description: 'Developed and maintained a rewards+ application for Fidelity Investments, enhancing customer engagement and satisfaction.',
  imageUrl: 'assets/fidelity-logo.png',
  type: 'Work Experience'
},

  {
    title: 'MSIT Degree',
    description: 'I completed my MSIT degree from Washington University of Science and Technology, where I gained a strong foundation in information technology.',
    imageUrl: 'assets/wust_logo.jpg',
    type: 'Education'
  },


  {
    title: 'B.sc Degree',
    description: 'I completed my B.sc degree from University of Ilorin in Economics',
    imageUrl: 'assets/uni_logo.jpg',
    type: 'Education'
  }

  ];
}
