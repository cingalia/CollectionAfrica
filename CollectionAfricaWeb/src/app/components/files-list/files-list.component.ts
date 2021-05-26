import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import { FileService } from 'src/app/services/file.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit, AfterViewInit  {

  files?: File[];
  currentFile?: File;
  currentIndex = -1;
  name = '';

  // displayedColumns = ['id', 'name', 'description'];
  displayedColumns = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<File>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fileService: FileService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.retrieveFiles();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  retrieveFiles(): void {
    this.fileService.getAll()
      .subscribe(
        data => {
          this.dataSource.data = data;
          this.files = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  public redirectToEdit = (id: string) => {
    this.router.navigate(['/files/' + id]);
  }

  refreshList(): void {
    this.retrieveFiles();
    this.currentFile = undefined;
    this.currentIndex = -1;
  }

  // setActiveFile(file: File, index: number): void {
  //   this.currentFile = file;
  //   this.currentIndex = index;
  // }
  setActiveFile(file: File): void {
    this.currentFile = file;
    // this.currentIndex = index;
  }

  removeAllFiles(): void {
    this.fileService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.fileService.findByName(this.name)
      .subscribe(
        data => {
          this.dataSource.data = data;
          this.files = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
