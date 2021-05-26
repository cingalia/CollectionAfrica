import { Component, OnInit } from '@angular/core';
import { File } from 'src/app/models/file.model';
import { FileService } from 'src/app/services/file.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})
export class AddFileComponent implements OnInit {

  fileForm: FormGroup;

  file: File = {
    name: '',
    description: '',
    path:'',
    size:0,
    type:'',
    timestamp:new Date()
  };
  submitted = false;

  constructor(
    private fileService: FileService,
    public formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.fileForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required]],
      path: ['', [Validators.required]],
      size: [0, [Validators.required]],
      type: ['', [Validators.required]],
      timestamp: [new Date()]
    })
  }

  get getControl(){
    return this.fileForm.controls;
  }
  
  onSubmit(){
    this.fileService.create(this.fileForm);
    console.log(this.fileForm);
  }

  saveFile(): void {
    const data = {
      name: this.file.name,
      description: this.file.description,
      path: this.file.path,
      size: this.file.size,
      type: this.file.type
    };

    this.fileService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFile(): void {
    this.submitted = false;
    this.file = {
      name: '',
      description: '',
      path:'',
      size:0,
      type:'',
      timestamp:new Date()
    };
  }

}
