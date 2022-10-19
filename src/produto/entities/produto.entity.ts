import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 45, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2})
    preco: number;

    @IsNotEmpty()
    @Column({length: 300, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({length: 45, nullable: false})
    imagem: string;
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE" 
     })
     categoria: Categoria
     
}
