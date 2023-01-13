<?php

namespace App\Repository\Album;

use App\Models\Albums;
use App\Repository\AlbumInterface;

Class  Album implements AlbumInterface
{
    protected $album;


    public function __construct(Albums $album)
    {
        $this->album=$album;
    }
    /**
     * Gets by id album.
     *
     * @return mixed
     */

    public function getAlbumById($album_id){
    return $this->album->where("id", $album_id)->first();
    }



        /**
     * Gets all album.
     *
     * @return mixed
     */
    public function getAll(){
        return	$this->album->latest();
    }

        /**
     * create a album
     *
     * @return mixed
     */
    public function create(array $data){
    return $this->album->create($data);
    }
        /**
     * Updates a album.
     *
     * @param int
     * @param array
     */

    public function update( $id,array $data){
    return	$this->album->find($id)->update($data);
    }

    /**
 * Deletes a album.
 *
 * @param int
 */
    public function delete($id){
    return	$this->album->find($id)->delete();
    }
}
?>