const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier == 0) {
    return 0;
  } else if (multiplier) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

type presInput = number | string | boolean;

const processInput = (value: presInput): presInput => {
  if (typeof value == "string") {
    return value.trim().toLowerCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

const formatCoordinate = (coordinate: Readonly<[number, number, string]>) => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const combined: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      combined.push(item);
    }
  }

  return combined;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const filteredCourses = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
  return filteredCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
};

