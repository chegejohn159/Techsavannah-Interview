/** Angular Imports */
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/**
 * Custom file upload component based on angular material.
 */
@Component({
  selector: 'mifosx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  /** Form field flex dimension */
  @Input() flex: any;
  @Input() acceptFilter: string;

  /** Selected file name */
  fileName: File;
  file_size: number;
  file: any;
  file_size_error: boolean = false;

  constructor() { }

  ngOnInit() {
    if (!this.acceptFilter) {
      this.acceptFilter = '.xls,.xlsx,.pdf,.doc,.docx,.png,.jpeg,.jpg';
    }
  }

  /**
   * Sets the file name.
   * @param {any} event File input change event.
   */
  onFileSelect($event: any) {
    this.file = $event.target.files[0];
    this.file_size = (this.file.size / 1000);
    if (this.file_size < 100) {
      this.file_size_error = false;
      this.fileName = this.file.name;
    } else {
          this.file_size_error = true;
    }

  }

}
