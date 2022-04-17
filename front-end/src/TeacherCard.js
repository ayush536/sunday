import { Link } from "react-router-dom";
import "./teacherCard.css"

const TeacherCard = ({id, name, imageUrl, age, subject, classes}) => {
    return (
        <Link to={`/teacherdetailspage/${id}`}>
            <div className='teacherCard'>
                <img className="im" src={imageUrl} alt="" width="15%" height="85%"  />
                <h2 className='title'color="white">
                    {name}
                </h2>
                <h2 className='title'color="white">
                    {subject}
                </h2>
                <p className='price'>age: 
                    {age}
                </p>
                <h3 className='price'> number of classes today:
                    {classes}
                </h3>
            </div>
        </Link>
    )

  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
export default TeacherCard