import { Body, HttpStatus, Param } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { Delete, Get, Post, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@Controller("/categorias")
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }
    
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Categoria[]>{
        return this.categoriaService.findByNome(nome);
     }

     @Post()
     @HttpCode(HttpStatus.CREATED)
     create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria)
     }

     @Put()
     @HttpCode(HttpStatus.OK)
     update(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
     }

     @Delete('/:id')
     @HttpCode(HttpStatus.NO_CONTENT)
     delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id);
     }
}   