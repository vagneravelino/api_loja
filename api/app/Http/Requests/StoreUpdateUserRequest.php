<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->segment(3);

        return [
            'name' => 'required|min:3|max:100',
            'email' => "required|email|min:3|max:180|unique:users,email,{$id},id",
            'password' => 'requiredOnCreate|min:6|max:20'
        ];
    }
}
