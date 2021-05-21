import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString  } from "class-validator";
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto){ }




//DTO=DAta access object 실질적으로 데이터에 접근하는 객체
//PartialType는 모든프로퍼티를 선택적으로 변환하는 타입