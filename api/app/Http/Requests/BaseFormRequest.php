<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseFormRequest extends FormRequest
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
        switch ($this->method())
        {
            case 'POST':
                return $this->store();
                break;
            case 'PUT':
                return $this->update();
                break;
            case 'DELETE':
                return $this->destroy();
                break;
            // default:
                // return $this->view();
        }

        // return match($this->method()){
        //     'POST' => $this->store(),
        //     'PUT', 'PATCH' => $this->update(),
        //     'DELETE' => $this->destroy(),
        //     default => $this->view()
        // };
    }

    public function store()
    {
        return [
            //
        ];
    }

    public function update()
    {
        return [
            //
        ];
    }

    public function destroy()
    {
        return [
            //
        ];
    }

    public function view()
    {
        return [
            //
        ];
    }
}
