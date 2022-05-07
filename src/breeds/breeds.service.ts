import { Injectable } from '@nestjs/common';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Breed } from './entities/breed.entity';


@Injectable()
export class BreedsService {
  constructor(
    @InjectRepository(Breed)
    private breedsRepository: Repository<Breed>,
  ) {}

  async create(createBreedDto: CreateBreedDto): Promise<Breed> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  create(createBreedDto: CreateBreedDto) {
    return 'This action adds a new breed';
  }

  findAll() {
    return `This action returns all breeds`;
  }

  findOne(id: number): Promise<Breed> {
    return this.breedsRepository.findOne(id);
  }

  update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
