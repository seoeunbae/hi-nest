import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll(): Movie[] {
        return this. movies;
    }

    getOne(id:number): Movie {
        
        const movie = this.movies.find(movie => movie.id === id);//this convert a string into a number
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found. `);
        }
        return movie;
    }

    deleteOne(id:number){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        
    }

    create(movieData : CreateMovieDto){
        this.movies.push({
            id:this.movies.length + 1,
            ...movieData,//...의 의미는?
        });
    }

    update(id: number, updateData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
//쿼리처리
//가짜데이터베이스

