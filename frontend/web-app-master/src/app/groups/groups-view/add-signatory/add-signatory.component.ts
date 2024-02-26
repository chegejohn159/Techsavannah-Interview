import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {GroupsService} from '../../groups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../../core/alert/alert.service';

@Component({
  selector: 'mifosx-add-signatory',
  templateUrl: './add-signatory.component.html',
  styleUrls: ['./add-signatory.component.scss']
})
export class AddSignatoryComponent implements OnInit {

  /** Groups Add Role Form */
  groupsAddSignatoryForm: UntypedFormGroup;
  /** Client Member Data */
  clientMemberData: any;
  /** Groups Account and Template Data */
  groupAndTemplateData: any;

  constructor(private formBuilder: UntypedFormBuilder,
              private groupsService: GroupsService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.data.subscribe((data: { groupAndTemplateData: any }) => {
      this.groupAndTemplateData = data.groupAndTemplateData;
    });
  }

  ngOnInit(): void {
    this.clientMemberData = this.groupAndTemplateData.activeClientMembers;
    this.createGroupsAddSignatoryForm();
  }

  createGroupsAddSignatoryForm() {
    this.groupsAddSignatoryForm = this.formBuilder.group({
      'clientId': ['', Validators.required],
    });
  }

  addSignatory() {
    const data = {
      clientId: this.groupsAddSignatoryForm.value.clientId,
      groupId : this.groupAndTemplateData.id
    };
    this.groupsService.addSignatory(data).subscribe(
      (data: any) => {
        this.alertService.alert({ type: 'Success', message: 'Signatory Added Successfully' });

        this.router.navigate(['../'], { relativeTo: this.route });
      },
      (error: any) => {
        this.alertService.alert({ type: 'Error', message: error.error.message });
      }
    );
  }

}
