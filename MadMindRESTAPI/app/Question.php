<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question','categoryTitle','categoryId','correctAnswer','option1','option2','option3','correctGuesses','option1Guesses','option2Guesses','option3Guesses','usePermission'
    ];
}
