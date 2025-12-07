export interface CourseCard {
  title: string;
  description: string;
  image: string; // URL or imported image path
}

export interface CourseSectionProps {
  courses: CourseCard[];
}
