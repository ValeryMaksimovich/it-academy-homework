import { CheckNotificationAndDelete, CourseCompleted, CoursesAvailability, Enroll, FinishCourse, ItemsAreLocked, Login, Logout, RetakeAndUnenroll, StartCourse, } from '../testcases/index.js';


describe('Smoke Test', () => {
    Login();
    CoursesAvailability();
    ItemsAreLocked();
    Enroll();
    StartCourse();
    FinishCourse();
    CourseCompleted();
    RetakeAndUnenroll();
    CheckNotificationAndDelete();
    Logout();
        
})