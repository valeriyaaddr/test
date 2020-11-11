import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FactsService } from '../../services/facts.service';
import { IJoke } from '../../models/joke.model';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  form: FormGroup;
  options: string[];
  joke: IJoke;

  constructor(private fb: FormBuilder, private service: FactsService) { }

  ngOnInit(): void {
    this.service.getCategory().subscribe((res: string[]) => {
      this.options = res;
    });
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  public setCategory(category): void {
    this.form.patchValue({
      category,
    });
  }

  private getCategories(categories): {} {
    if (Array.isArray(categories) && categories.length > 0 && !categories.includes('all')) {
      return { category: categories.join(',')};
    }
    return {};
  }

  public getJoke(): void {
    const { name, category } = this.form.value;
    this.service.getRandomJoke({name, ...this.getCategories(category)}).subscribe((res: IJoke) => {
      this.joke = res;
    });
  }

}
