<?php

class QualityCourseAction extends  Action{
	
	//
	public function  index(){
		
     	$this->display("index");

	}
	public function overview(){
		
	$this->display("overview");
	
	}
	
	public function target(){
		
		$this->display("target");
	}
	
	public function special(){
		$this->display("special");
	}
	
	public function planing(){
		$this->display("planing");
	}
	
	public function textbook(){
		$this->display("textbook");
	}
 	
	
}
