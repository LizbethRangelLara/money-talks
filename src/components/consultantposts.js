import React, {Component} from 'react';
import Consultants from './consultants.js';
import "../css/consultants.css";
import Footer from "./footer.js"

class Consultantposts extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
              <Consultants image={"/bill.jpg"} name={"Bill Gates"} industry={"Software & Entreprenurship"} experience={"46 Years"} linkedin={"https://www.linkedin.com/in/williamhgates/"} about={"Bill is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen. During his career at Microsoft, Gates held the positions of chairman, chief executive officer (CEO), president and chief software architect, while also being the largest individual shareholder until May 2014. He is considered one of the best known entrepreneurs of the microcomputer revolution of the 1970s and 1980s."}/>
              <Consultants image={"/kevin.jpg"} name={"Kevin O'Leary"} industry={"Finance"} experience={"41 Years"} linkedin={"https://www.linkedin.com/in/kevinolearytv/"} about={"Kevin launched SoftKey Software Products. As sales took off, Kevin moved to headquarters in Cambridge, Massachusetts and went on an industry consolidating acquisition binge. From 1995 to 1999 he bought out almost every one of his software competitors, including Mindscape, Broderbund and the Learning. In 1999 Kevin sold his company to the Mattel Toy Company for $4.2 billion, one of the largest deals ever done in the consumer software industry. To keep his money working hard, he took control of his wealth from his lackluster money managers and founded his own mutual fund company, O'Leary Funds. Kevin looks hardest for investments that make money - and are environmentally friendly. When he's not squeezing the market from his office, he travels the world looking for new opportunities to deploy his capital. He is on the investment committee of Boston's prestigious 200-year-old Hamilton Trust."}/>
              <Consultants image={"/gary.jpg" } name={"Gary Jackson"} industry={"Data Science"} experience={"25 Years"} linkedin={"https://www.linkedin.com/in/gsjackson/"} about={"Gary has 25+ years background in Data Science, Big Data engineering in sales, pre-sales, delivery, enablement, innovation, and global partner alliances while living in North & South America, Europe, Asia-Pacific, Australia, & Africa."}/>
              <Consultants image={"/sharon.jpg"} name={"Dr. Sharon Jones"} industry={"Computer Science"} experience={"17 Years"} linkedin={"https://www.linkedin.com/in/dr-sharon-torrence-jones-a9b264a6/"} about={"Dr. Sharon Jones has committed her career to providing computer science to all. She has been a dedicated, award winning educator of computer science and technology for 17 years and throughout her career she has created, implemented, and facilitated computer science workshops that apply the concepts of technology to everyday activities. Her work considers how computer science helps create new viewpoints, innovate, create power relations, produce knowledge, and make data and computing transparent, accessible, and inclusive. The range of her work inspires her to experiment with diverse forms, including art, design, coding, courses, workshops, and academic writing. Across her many projects, her goal is to make computer science inclusive, and empowering."}/>
          </div>
        </div>
        <p>&nbsp;</p>
        <Footer />
      </div>
    );
  }
}

export default Consultantposts;