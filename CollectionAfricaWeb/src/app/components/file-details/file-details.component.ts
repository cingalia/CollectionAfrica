import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from 'src/app/models/file.model';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {

  currentFile: File = {
    name: '',
    description: '',
    path:'',
    size:0,
    type:'',
    timestamp:new Date()
  };
  message = '';

  constructor(
    private fileService: FileService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getFile(this.route.snapshot.params.id);
  }

  getFile(id: string): void {
    this.fileService.get(id)
      .subscribe(
        data => {
          this.currentFile = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFile(): void {
    this.fileService.update(this.currentFile.id, this.currentFile)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteFile(): void {
    this.fileService.delete(this.currentFile.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/files']);
        },
        error => {
          console.log(error);
        });
  }

}
