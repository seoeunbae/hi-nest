export class Movie{
    id : number;
    title: string;
    year: number;
    genres: string[];
}

//서비스로 보내거나받을 클래스(인터페이스)를 export
//export= 네임스페이스 외부에서도 접근이 가능하도록하고 싶은 데이터가 있으면 사용